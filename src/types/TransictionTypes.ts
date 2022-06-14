export type transictionType={
    id:Number,
    desc:String,
    amount:Number

}
export type initalStateType={
    transiction:transictionType[]|[],
    add: (transition: transictionType) => void,
    del: (id: Number) => void
}
'{ transiction: any; add: (transition: transictionType) => void; del: (id: Number) => void; }'
export type globalContext={
    transiction:transictionType[]|[]

}