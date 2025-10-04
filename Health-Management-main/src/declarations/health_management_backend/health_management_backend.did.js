export const idlFactory = ({ IDL }) => {
  const CreateRecordInput = IDL.Record({
    'metadata' : IDL.Text,
    'data' : IDL.Vec(IDL.Nat8),
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const AccessLevel = IDL.Variant({
    'admin' : IDL.Null,
    'read' : IDL.Null,
    'write' : IDL.Null,
  });
  const MedicalRecord = IDL.Record({
    'id' : IDL.Text,
    'patientId' : IDL.Principal,
    'metadata' : IDL.Text,
    'data' : IDL.Vec(IDL.Nat8),
    'accessList' : IDL.Vec(IDL.Tuple(IDL.Principal, AccessLevel)),
    'timestamp' : IDL.Int,
  });
  const UpdateRecordInput = IDL.Record({
    'id' : IDL.Text,
    'metadata' : IDL.Text,
    'data' : IDL.Vec(IDL.Nat8),
  });
  return IDL.Service({
    'createRecord' : IDL.Func([CreateRecordInput], [Result], []),
    'getPatientRecords' : IDL.Func([], [IDL.Vec(MedicalRecord)], []),
    'getRecord' : IDL.Func([IDL.Text], [IDL.Opt(MedicalRecord)], []),
    'grantAccess' : IDL.Func(
        [IDL.Text, IDL.Principal, AccessLevel],
        [IDL.Bool],
        [],
      ),
    'revokeAccess' : IDL.Func([IDL.Text, IDL.Principal], [IDL.Bool], []),
    'updateRecord' : IDL.Func([UpdateRecordInput], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
