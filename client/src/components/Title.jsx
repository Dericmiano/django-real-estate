import React from 'react'
import {Helmet} from "react-helmet"

export const Title = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Helmet>
  )
}
Title.defaultProps = {
    title: "Welcom to Real Estate",
    description: "We sell the best properties in Nairo and whole World",
    keywords: "Lands, real estate, besat value"
}
