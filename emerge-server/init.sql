CREATE DATABASE IF NOT EXISTS emergedb;

USE emergedb;

CREATE TABLE Hosts (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    PRIMARY KEY(id)
);

CREATE TABLE Seekers (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    PRIMARY KEY(id)
);

CREATE TABLE Requests (
    id INT AUTO_INCREMENT NOT NULL,
    seeker_id INT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    additional_info VARCHAR(255),
    status CHAR(1) DEFAULT 'N',
    PRIMARY KEY(id),
    FOREIGN KEY(seeker_id) REFERENCES Seekers(id),
    CONSTRAINT chk_status CHECK (status IN ('Y', 'N'))
);

CREATE TABLE Aid_Offers (
    id INT AUTO_INCREMENT NOT NULL,
    host_id INT NOT NULL,
    request_id INT,
    availability VARCHAR(255),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    additional_info VARCHAR(255),
    zip_code CHAR(5) NOT NULL,
    latitude DECIMAL,
    longitude DECIMAL,
    PRIMARY KEY(id),
    FOREIGN KEY(host_id) REFERENCES Hosts(id),
    FOREIGN KEY(request_id) REFERENCES Requests(id)
);

CREATE TABLE Aid_Categories (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE Aid_Offers_Categories (
    aid_offer_id INT NOT NULL,
    aid_category_id INT NOT NULL,
    PRIMARY KEY(aid_offer_id, aid_category_id),
    FOREIGN KEY(aid_offer_id) REFERENCES Aid_Offers(id),
    FOREIGN KEY(aid_category_id) REFERENCES Aid_Categories(id)
);

SHOW TABLES;

COMMIT;