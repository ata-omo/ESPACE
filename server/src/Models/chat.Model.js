// chat features
// 1- chat name
// 2- one to many or many to many or one to one
// 3- admin info(*)/group creator info
// 4- latest message

import mongoose,{Schema, mongo} from "mongoose";
import {Jwt} from "jsonwebtoken";
import bcrypt from "bcrypt";