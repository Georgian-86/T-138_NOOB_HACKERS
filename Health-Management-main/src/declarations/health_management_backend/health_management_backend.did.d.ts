import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type AccessLevel = { 'admin' : null } |
  { 'read' : null } |
  { 'write' : null };
export interface CreateRecordInput {
  'metadata' : string,
  'data' : Uint8Array | number[],
}
export interface MedicalRecord {
  'id' : string,
  'patientId' : Principal,
  'metadata' : string,
  'data' : Uint8Array | number[],
  'accessList' : Array<[Principal, AccessLevel]>,
  'timestamp' : bigint,
}
export type Result = { 'Ok' : string } |
  { 'Err' : string };
export interface UpdateRecordInput {
  'id' : string,
  'metadata' : string,
  'data' : Uint8Array | number[],
}
export interface _SERVICE {
  'createRecord' : ActorMethod<[CreateRecordInput], Result>,
  'getPatientRecords' : ActorMethod<[], Array<MedicalRecord>>,
  'getRecord' : ActorMethod<[string], [] | [MedicalRecord]>,
  'grantAccess' : ActorMethod<[string, Principal, AccessLevel], boolean>,
  'revokeAccess' : ActorMethod<[string, Principal], boolean>,
  'updateRecord' : ActorMethod<[UpdateRecordInput], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
