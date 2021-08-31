import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { AdoptionStatus } from "./adoptionStatus";
import { Species } from "./species";

export interface AnimalAttributes {
  id: string;
  shelter_id: string;
  adoption_status: AdoptionStatus;
  species: Species;
  name: string;
  description: string;
  health_issues: string;
  gender: "F" | "M";
  age_months: number;
  size_cm: number;
  breed: string;
  color: string;
  weight_kg: number;
  fur_length: string;
  vaccinated: boolean;
  dewormed: boolean;
  sterilized: boolean;
  adoption_fee: number;
  intake_date: Date;
  created_at: Date;
  updated_at: Date;
}

// Some attributes are optional in `Animal.build` and `Animal.create` calls
// eslint-disable-next-line 
export interface AnimalCreationAttributes extends Optional<AnimalAttributes, "id"> { }

export class AnimalModel extends Model<AnimalAttributes, AnimalCreationAttributes>
  implements AnimalAttributes {
  public id!: string;
  public shelter_id!: string;
  public adoption_status!: AdoptionStatus;
  public species!: Species;
  public name!: string;
  public description!: string;
  public health_issues!: string;
  public gender!: "F" | "M";
  public age_months!: number | null;
  public size_cm!: number | null;
  public breed!: string | null;
  public color!: string | null;
  public weight_kg!: number;
  public fur_length!: string | null;
  public vaccinated!: boolean | null;
  public dewormed!: boolean | null;
  public sterilized!: boolean | null;
  public adoption_fee!: number | null;
  public intake_date!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  // TODO: shelter association
  public static associations: null;
}

AnimalModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    shelter_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    adoption_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_issues: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age_months: {
      type: DataTypes.INTEGER
    },
    size_cm: {
      type: DataTypes.INTEGER
    },
    breed: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight_kg: {
      type: DataTypes.DECIMAL
    },
    fur_length: {
      type: DataTypes.STRING
    },
    vaccinated: {
      type: DataTypes.BOOLEAN
    },
    dewormed: {
      type: DataTypes.BOOLEAN
    },
    sterilized: {
      type: DataTypes.BOOLEAN
    },
    adoption_fee: {
      type: DataTypes.DECIMAL
    },
    intake_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: "animal",
    sequelize, // passing the `sequelize` instance is required
  }
);
