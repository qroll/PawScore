import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { toEnumValues } from "../utils/enumUtil";

export enum AdoptionStatus {
  Ongoing = "Ongoing",
  Adopted = "Adopted",
  Archived = "Archived"
}

// These are all the attributes for the model
export interface AdoptionStatusAttributes {
  id: string;
  status: AdoptionStatus;
  created_at: Date;
  updated_at: Date;
}

export class AdoptionStatusModel extends Model<AdoptionStatusAttributes>
  implements AdoptionStatusAttributes {
  public id!: string;
  public status!: AdoptionStatus;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: null;
}

AdoptionStatusModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM(...toEnumValues(AdoptionStatus)),
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
    tableName: "adoption_status",
    sequelize, // passing the `sequelize` instance is required
  }
);
