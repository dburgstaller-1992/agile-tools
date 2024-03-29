CREATE DATABASE agiletools;

/* execute 
\c agiletools 
*/

CREATE TABLE teams (
    id INT,
    name VARCHAR(255)
);

INSERT INTO teams VALUES(
    1, 
    'Shellshock'
);
INSERT INTO teams VALUES(
    2, 
    'Netsky'
);