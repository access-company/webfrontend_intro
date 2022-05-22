import { PayloadAction } from "@reduxjs/toolkit";

type Pending = PayloadAction<unknown, string, { arg: void; requestId: string; requestStatus: 'pending'; }, never>
type Fulfilled<T> = PayloadAction<T, string, { arg: void; requestId: string; requestStatus: 'fulfilled'; }, never>
type Rejected = PayloadAction<unknown, string, { arg: void; requestId: string; requestStatus: 'rejected'; }, never>

type Action<T> = Pending | Fulfilled<T> | Rejected

export default Action
