// type MapGetters<T> = {
//   [I in keyof T]: T[I] extends (...args: any) => infer R ? R : never;
// };

// declare function defineStore<S, G, A>(store: {
//   id: string;
//   state: () => S;
//   getters: G & ThisType<Readonly<S & MapGetters<G>>>;
//   actions: A & ThisType<S & Readonly<MapGetters<G> & A>>;
// }): S & Readonly<MapGetters<G> & A>;

// We don't need this helper, but it's really nice to do this as people use nested
// state a lot in Pinia / Vuex / your favourite state management solution.
type DeepReadonly<T> = {
  readonly [K in keyof T]: 
    T[K] extends object 
      ? DeepReadonly<T[K]> 
      : T[K]
}

// For computed getters, map the values from functions to their return types,
// representing their cached values.
//   There's an enhancement we should make here which is that if the getters list a
// function with at least one parameter, this is not a computed property, but a
// function that returns that function (or something like that - as obviously you
// can't cache something (fully) which accepts parameters).
type Compute<Getters extends object> = Readonly<{
  [P in keyof Getters]: Getters[P] extends () => infer Result
    ? Result
    : never
}>

// Getters get (deep) readonly access to the state, and all of the other (computed) getters
type Getters<State> = {
  [P in keyof any]: (
    this: DeepReadonly<State> & Compute<Getters<State>>, 
    ...args: any[]
  ) => any
}

// Actions get non-readonly access to the state, and all of the other (computed) getters
type Actions<State> = {
  [P in keyof any]: (
    this: State & Compute<Getters<State>>, 
    ...args: any[]
  ) => any
}

type Options<State extends object, GettersWithState, ActionsWithState> = {
  id: string,
  state: () => State,
  getters: GettersWithState,
  actions: ActionsWithState
}

type Store<State extends object, Getters extends object, Actions extends object> = 
  State
  &
  Compute<Getters>
  &
  Actions

// We infer the State, and then place constraints on the user-defined Getters & 
// Actions based on the State, which leads to some great auto-complete & type-checking
// when calling defineStore.
declare function defineStore<
  State extends object, 
  GettersWithState extends Getters<State>,
  ActionsWithState extends Actions<State>
>(store: Options<State, GettersWithState, ActionsWithState>)
  : Store<State, GettersWithState, ActionsWithState>