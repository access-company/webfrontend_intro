type MatchType = 'default' | 'unused' | 'used' | 'matched'
type MatchResult = {
  value?: string
  type?: MatchType
}

// FiniteArray<N, T>:
//    N: Number of the element
//    T: Type
type FiniteArray<N extends number, T> = FiniteArrayRecursive<N, T, []>
type FiniteArrayRecursive<N, T, R extends unknown[]> =
  R['length'] extends N ?
    R :
    FiniteArrayRecursive<N, T, [...R, T]>