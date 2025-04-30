create database if not exists `bsocial`;
use `bsocial`;

CREATE TABLE IF NOT EXISTS `bsocial`.`users` (
    `userID` INT NOT NULL AUTO_INCREMENT , 
    `username` VARCHAR(72) NOT NULL , 
    `password` TEXT NOT NULL , 
    `salt` TEXT NOT NULL , 
    `pictureURL` VARCHAR(72) NOT NULL ,
    `settings` JSON NOT NULL DEFAULT '{ \'private\':false}' , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`userID`)
);


CREATE TABLE IF NOT EXISTS `bsocial`.`posts` (
    `postID` INT NOT NULL AUTO_INCREMENT , 
    `userID` INT NOT NULL , 
    `contentURL` MEDIUMTEXT NOT NULL , 
    `message` TEXT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`postID`),
    FOREIGN KEY (`userID`) REFERENCES `bsocial`.`users` (`userID`)
);
    

CREATE TABLE IF NOT EXISTS `bsocial`.`likes` (
    `likeID` INT NOT NULL AUTO_INCREMENT , 
    `postID` INT NOT NULL , 
    `userID` INT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`likeID`),
    FOREIGN KEY (`postID`) REFERENCES `bsocial`.`posts` (`postID`),
    FOREIGN KEY (`userID`) REFERENCES `bsocial`.`users` (`userID`)
);


CREATE TABLE IF NOT EXISTS `bsocial`.`comments` (
    `commentID` INT NOT NULL AUTO_INCREMENT , 
    `postID` INT NOT NULL , 
    `userID` INT NOT NULL , 
    `message` TEXT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`commentID`),
    FOREIGN KEY (`postID`) REFERENCES `bsocial`.`posts` (`postID`),
    FOREIGN KEY (`userID`) REFERENCES `bsocial`.`users` (`userID`)
);


CREATE TABLE IF NOT EXISTS `bsocial`.`followers` (
    `followerID` INT NOT NULL , 
    `followingID` INT NOT NULL ,
    FOREIGN KEY (`followerID`) REFERENCES `bsocial`.`users` (`userID`),
    FOREIGN KEY (`followingID`) REFERENCES `bsocial`.`users` (`userID`)
);

CREATE TABLE IF NOT EXISTS `bsocial`.`directMessages` (
    `messageID` INT NOT NULL AUTO_INCREMENT , 
    `senderID` INT NOT NULL , 
    `receiverID` INT NOT NULL , 
    `message` TEXT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`messageID`),
    FOREIGN KEY (`senderID`) REFERENCES `bsocial`.`users` (`userID`),
    FOREIGN KEY (`receiverID`) REFERENCES `bsocial`.`users` (`userID`)
);

CREATE TABLE IF NOT EXISTS `bsocial`.`groups` (
    `groupID` INT NOT NULL AUTO_INCREMENT , 
    `name` TINYTEXT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`groupID`)
);


CREATE TABLE IF NOT EXISTS `bsocial`.`groupmembers` (
    `groupID` INT NOT NULL , 
    `userID` INT NOT NULL ,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    FOREIGN KEY (`groupID`) REFERENCES `bsocial`.`groups` (`groupID`),
    FOREIGN KEY (`userID`) REFERENCES `bsocial`.`users` (`userID`)
);


CREATE TABLE IF NOT EXISTS `bsocial`.`groupmessages` (
    `messageID` INT NOT NULL AUTO_INCREMENT , 
    `groupID` INT NOT NULL , 
    `userID` INT NOT NULL ,
    `message` TEXT NOT NULL , 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`messageID`),
    FOREIGN KEY (`groupID`) REFERENCES `bsocial`.`groups` (`groupID`),
    FOREIGN KEY (`userID`) REFERENCES `bsocial`.`users` (`userID`)
);