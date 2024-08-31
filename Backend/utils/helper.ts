import express, { Response } from "express";

export function errorHandleing(error: unknown, res: Response, at: string) {
  console.error(`Error creating user at ${at}:`, error);
  res.status(500).json({ error: "Internal Server Error" });
}
