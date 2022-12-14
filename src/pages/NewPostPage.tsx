import { TonalitySharp } from "@mui/icons-material";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { toNamespacedPath } from "node:path/win32";
import React, { useCallback, useState } from "react";

function NewPostPage() {

  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}


  


export default NewPostPage;
