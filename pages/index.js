import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose,title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => {
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="grey.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBotton="3" color="grey.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
}

export default function Home() {
  return (
    <div>
      <h1>Property Rent App</h1>
      <Banner 
      purpose="RENT A HOME"
      title="Rental Home for"
      title2="Everyone"
      desc1="Explore Apartments, Houses"
      desc2="and more"
      buttonText="Explore Rent"
      linkName="/search?purpose=for-rent"
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Banner 
      purpose="BUY  A HOME"
      title="Find, Buy a new home"
      title2="Dream Home"
      desc1="Explore Apartments, Houses"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-rent"
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
    </div>
  )
}
