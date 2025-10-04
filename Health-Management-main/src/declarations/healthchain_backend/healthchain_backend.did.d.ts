import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface HealthRecord {
  'id' : string,
  'patient' : Principal,
  'record_type' : string,
  'doctor' : string,
  'date' : bigint,
  'description' : string,
}
export interface _SERVICE {
  'create_record' : ActorMethod<[string, string, string], HealthRecord>,
  'delete_record' : ActorMethod<[string], boolean>,
  'get_health_records' : ActorMethod<[], Array<HealthRecord>>,
  'get_record' : ActorMethod<[string], [] | [HealthRecord]>,
  'update_record' : ActorMethod<[string, string, string, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
