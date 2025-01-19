"use client"

import ArticleDetail from '@/components/ArtilceLanding'
import MiniBanner from '@/components/MiniBanner'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, CircularProgress, Card, CardContent, CardMedia } from '@mui/material';


export default function ArticleDetails() {
  // const router = useRouter()
  // const { slug } = router.query

  // console.log(slug)

  return (
    <> 
      <ArticleDetail />
      <MiniBanner />
    </>
  
  )
}
