function indentity<T>(arg: T): T{
    return arg
}

const str = indentity<string>('one')
const num = indentity<number>(2)
const bool = indentity<boolean>(true)

class Generic{
    public item: string[] = []
}

const inst = new Generic

inst.item.push("1")