import { Style } from "@mui/icons-material";
import { Chip, Avatar, createSvgIcon, SvgIcon } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

export type LanguageChipsProps = {
  label: string;
  languagetype:
    | "graphql"
    | "kotlin"
    | "mysql"
    | "mongodb"
    | "php"
    | "firebase"
    | "swift"
    | "unity"
    | "git"
    | "zest"
    | "javascript"
    | "typescript"
    | "react"
    | "vue"
    | "svelte"
    | "nextjs"
    | "nodejs"
    | "java"
    | "spring"
    | "go"
    | "nestjs"
    | "express"
    | "django"
    | "figma"
    | "zeplin"
    | "aws"
    | "docker"
    | "kubernetes"
    | "flutter"
    | "reactnative"
    | "c"
    | "c++"
    | "c#"
    | "python";
};

function LanguageChips(props: LanguageChipsProps) {
  const handleClick = () => {
    console.info("you clicked tho Chip.");
  };

  return (
    <div>
      <Chip
        sx={{ fontSize: "17px", fontWeight: "bold", height: "" }}
        icon={
          <img
            style={{ objectFit: "contain", margin: "10px" }}
            src={"/src/assets/iconsvg/" + props.languagetype + ".svg"}
          />
        }
        label={props.label}
        variant="outlined"
        onClick={handleClick}
        size="small"
      />
    </div>
  );
}

export default LanguageChips;
