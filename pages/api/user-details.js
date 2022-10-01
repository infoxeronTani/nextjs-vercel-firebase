import { db, auth } from '../../lib/firebase';

export default async function handler(req, res) {
  //   const user = await db.collection('db-dev').doc('categories').get();
  const decodedToken = await auth.verifyIdToken(
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4NWI5MGI1OWM2YjM2ZDNjOTBkZjBlOTEwNDQ1M2U2MmY4ODdmNzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidGFuaXlhIG1hbHZpeWEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJlYWstZnJlZS00NTg4MyIsImF1ZCI6ImJyZWFrLWZyZWUtNDU4ODMiLCJhdXRoX3RpbWUiOjE2NjQ1OTI3NjYsInVzZXJfaWQiOiJlZkZ5WU5OUHpPU21sVVI1ZU1lWmhJQmFFbTMzIiwic3ViIjoiZWZGeVlOTlB6T1NtbFVSNWVNZVpoSUJhRW0zMyIsImlhdCI6MTY2NDU5Mjc2NiwiZXhwIjoxNjY0NTk2MzY2LCJlbWFpbCI6InRhbml5YS5tYWx2aXlhQGluZm94ZXJvbi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX251bWJlciI6Iis5MTk0MDc0NjU4MTgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk0MDc0NjU4MTgiXSwiZW1haWwiOlsidGFuaXlhLm1hbHZpeWFAaW5mb3hlcm9uLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TAKpA1c1wp-G1OtzbJMO3Abz7mn3UuXOWGX69BDfBi2TP1UM3Hl3UoLVcmhyq1-L-ujXpwuKdAv38JjcoQyoFqyeboCpmFH0YVXhsf05tUOJpUUg-O3UvBpl6vS4tOcVe7viDqITCxjrWEk-CCkJxxUAP5kdVbR94Y4CgOsebBIqU2EIRS9r-f2COv4XZ1Sp6b2H81586yU1-WcZ3EqhuMTP9RAFYxk2WiryPhHoFExdgAkVD-ngYH3Pbw5AIBSdApGXbcSsJiQUdgSyQyLeAlYsEcg-oaiEw8vCsYM3AmqNcxt7J4F0Of5vZSWVwnySds4PBiuplTeM3qh_r5_3DQ'
  );
  const uid = decodedToken.uid;
  const slugRef = await db
    .collection('db-dev')
    .doc(`user-status`)
    .get();

    const slugData = await slugRef.data();

  return res.status(200).json({ ...slugData });
}
