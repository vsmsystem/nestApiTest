/*
  Warnings:

  - You are about to drop the `testex3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `testex3`;

-- CreateTable
CREATE TABLE `abcd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idx` INTEGER NOT NULL,
    `con` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
