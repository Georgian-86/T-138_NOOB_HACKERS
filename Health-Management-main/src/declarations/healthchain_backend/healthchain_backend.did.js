export const idlFactory = ({ IDL }) => {
  const HealthRecord = IDL.Record({
    'id' : IDL.Text,
    'patient' : IDL.Principal,
    'record_type' : IDL.Text,
    'doctor' : IDL.Text,
    'date' : IDL.Nat64,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'create_record' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [HealthRecord],
        [],
      ),
    'delete_record' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'get_health_records' : IDL.Func([], [IDL.Vec(HealthRecord)], ['query']),
    'get_record' : IDL.Func([IDL.Text], [IDL.Opt(HealthRecord)], ['query']),
    'update_record' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
