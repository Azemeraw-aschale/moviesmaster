-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('Romance', 'Action', 'Horror', 'Comedy', 'Drama', 'SciFi', 'Documentary', 'Animation', 'Adventure', 'Thriller', 'Fantasy', 'Crime', 'War', 'History', 'Music', 'Mystery', 'Family', 'Biography', 'Sport', 'Western');

-- CreateTable
CREATE TABLE "ButtonStatus" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ButtonStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "director" TEXT,
    "releaseYear" INTEGER,
    "runtime" INTEGER,
    "genre" "Genre",
    "image" BYTEA NOT NULL,
    "rating" DOUBLE PRECISION,
    "plotSummary" TEXT,
    "cast" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewData" (
    "movieId" SERIAL NOT NULL,
    "title" TEXT,
    "director" TEXT,
    "genre" "Genre",

    CONSTRAINT "NewData_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "UserRegistration" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_username_key" ON "UserRegistration"("username");
