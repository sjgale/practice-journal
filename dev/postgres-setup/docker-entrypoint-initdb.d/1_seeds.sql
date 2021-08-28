INSERT INTO
  users (id, first_name, last_name, email)
VALUES 
  ('42badf26-41dd-4950-8ff5-b7ec132f8d9f', 'Jim', 'Jones', 'jim_jones@test.com'),
  ('ce5419b1-c048-4617-8ed6-07a805c728a8', 'Sam', 'Gale', 'sjwindy@gmail.com'),
  ('9ab823d0-0d62-456b-be71-be09b4217bf9', 'Mert', 'Miller', 'mert_miller@test.com');

INSERT INTO 
  sessions (id, summary, length, date, user_id)
VALUES
  ('e637cc3a-524b-4dc6-863e-c01a9eb77558', 'I practiced the A, C, and D chords.', '15', '2021-08-01 12:00:00', '42badf26-41dd-4950-8ff5-b7ec132f8d9f'),
  ('50041473-3cb3-4b3e-8eea-aede765cd016', 'I improvised solos using the major pentatonic scale.', '30', '2021-08-02 12:00:00', '42badf26-41dd-4950-8ff5-b7ec132f8d9f'),
  ('a7497188-b479-4039-84df-3d2215a61e19', 'I practiced variations of the C chord up an down the neck.', '20', '2021-08-02 12:00:00', 'ce5419b1-c048-4617-8ed6-07a805c728a8'),
  ('1eaf1e7d-a27e-4e38-b91e-c5cdabf973e4', 'I trained my ears by transcribing my favorite song.', '75', '2021-08-01 12:00:00', '9ab823d0-0d62-456b-be71-be09b4217bf9');
  ('1eaf1e7d-a27e-4e38-b91e-c5cdabf973e4', 'I practiced adding color notes to open chords.', '30', '2021-08-03 12:00:00', '9ab823d0-0d62-456b-be71-be09b4217bf9');