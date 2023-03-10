import { Box, Flex, Text, Spacer, Tag, Button, Icon, Image, Center } from '@chakra-ui/react';
import { BiCalendarEvent } from "react-icons/bi";
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/es';


export function LaunchItem(launch) {

  const property = {
    imageUrl: launch.links?.mission_patch_small,
    imageAlt: 'Escudo de la Misión',
  }

    return (
      <>
        
        <Box 
            bg="gray.300"
            p={4}
            m={4}
            borderRadius="lg"            
          >          
            <Center mb={2}>
              <Image m={3} src={property.imageUrl} alt={property.imageAlt} />
            </Center>
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong>
                ({launch.launch_year})
              </Text>
              <Spacer />
              <Tag height={10} p={2} colorScheme={launch.launch_success ? "green" : "red"} >
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex align="center">
              <Icon as={BiCalendarEvent} color="gray.700" />
              <Text fontSize='sm' ml={2} color="gray.700">
                {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
              </Text>
            </Flex>

            <Link to={`/launch/${launch.flight_number}`}>
              <Button mt={2} colorScheme="purple">
                  More Details
              </Button>
            </Link>
        </Box>
      </>
    );
}