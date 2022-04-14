type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer Res ?
    (...args: [...Args, A]) => Res : Fn

type AppendArgument2<Fn extends (...args: any[]) => any, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>