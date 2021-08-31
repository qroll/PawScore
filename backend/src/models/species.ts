import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { toEnumValues } from "../utils/enumUtil";

export enum Species {
  Cat = "Cat",
  Dog = "Dog",
  Others = "Others"
}

export interface SpeciesAttributes {
  id: string;
  name: Species;
  created_at: Date;
  updated_at: Date;
}

export class SpeciesModel extends Model<SpeciesAttributes>
  implements SpeciesAttributes {
  public id!: string;
  public name!: Species;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: null;
}

SpeciesModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM(...toEnumValues(Species)),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "species",
    sequelize, // passing the `sequelize` instance is required
  }
);
