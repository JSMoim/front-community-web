import { Chip, Avatar } from '@mui/material'
import React from 'react'

export type LanguageChipsProps = {
  label: string;
  logo: string;
  languagetype: "NodeJs" | "VanillaJs" | "GitHub";
};

function LanguageChips(props: LanguageChipsProps)  {

  return (
    
    <Chip 
    
    avatar ={<Avatar src={props.logo}/>}
    label={props.label} 
    size="medium" />

  )
}

export default LanguageChips  