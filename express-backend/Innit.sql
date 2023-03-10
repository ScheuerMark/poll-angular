IF OBJECT_ID('Votes', 'U') IS NOT NULL
  DROP TABLE Votes;

IF OBJECT_ID('Polls', 'U') IS NOT NULL
  DROP TABLE Polls;

IF OBJECT_ID('IpAddresses', 'U') IS NOT NULL
  DROP TABLE IpAddresses;

CREATE TABLE Polls (
  id INT PRIMARY KEY IDENTITY(1,1),
  title TEXT NOT NULL
);

CREATE TABLE Votes (
  id INT PRIMARY KEY IDENTITY(1,1),
  poll_id INT NOT NULL,
  name TEXT NOT NULL,
  votes INT NOT NULL,
  FOREIGN KEY (poll_id) REFERENCES Polls(id)
);

CREATE TABLE IpAddresses (
  id INT PRIMARY KEY IDENTITY(1,1),
  poll_id INT NOT NULL,
  ip_address TEXT NOT NULL,
  FOREIGN KEY (poll_id) REFERENCES Polls(id)
);