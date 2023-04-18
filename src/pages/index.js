import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function Home() {
  const ScrollAnimation = () => {
    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      const scrollAnimationElm = document.querySelectorAll(".sa");

      const scrollAnimationFunc = () => {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
          const triggerMargin = 350;
          if (
            window.innerHeight >
            scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
          ) {
            scrollAnimationElm[i].classList.add("show");
          }
        }
      };

      window.addEventListener("load", scrollAnimationFunc);
      window.addEventListener("scroll", scrollAnimationFunc);

      return () => {
        window.removeEventListener("load", scrollAnimationFunc);
        window.removeEventListener("scroll", scrollAnimationFunc);
      };
    }, []);

    return null;
  };

  return (
    <>
      <Head>
        <title>わやのHP</title>
        <meta name="description" content="HP作成会用のサンプルページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={{ base: "none", sm: "block" }}>
        <Box
          position={"fixed"}
          w="100vw"
          className="text"
          h="10vh"
          bg="gray.200"
          zIndex={"100"}
          opacity={"0.8"}
        >
          <Flex
            pt="6px"
            pb="6px"
            bg=""
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              letterSpacing="0.06rem"
              fontSize="28px"
              fontWeight="bold"
              mr="auto"
              ml="90px"
            >
              
            </Text>
            <Flex mr="90px">
              <Text mr="40px" fontWeight={"bold"}>
                ABOUT
              </Text>
              <Text fontWeight={"bold"}>WORKS</Text>
            </Flex>
          </Flex>
        </Box>
        <Box h="100vh" className="goldGradient">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="100px"
              w="100px"
              borderRadius="50%"
              className="pat"
              opacity={"0.8"}
              mb="20px"
            ></Box>
            <Text
              fontSize="35px"
              letterSpacing="0.08rem"
              fontWeight="bold"
              color="gray.800"
              className="text shadow"
            >
              わやのへや
            </Text>
          </Flex>
        </Box>

        <Box
          w="100vw"
          minH="830px"
          bg=""
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              Art Works
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="140px" w="520px">
                <Text
                  fontSize={"20px"}
                  letterSpacing={"0.06rem"}
                  lineHeight={"1.7em"}
                >
                  これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                  これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                </Text>
              </Box>
              <Image
                src="/cyclepicture.jpg"
                width={"500px"}
              />
            </Flex>
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              活動・経験
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Image
                src="https://images.unsplash.com/photo-1680868354675-34192a9baae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
                width={"640px"}
              />
              <Box ml="140px" w="520px">
                <Text
                  fontSize={"20px"}
                  letterSpacing={"0.06rem"}
                  lineHeight={"1.7em"}
                >
                  これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                  これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box h="300px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"30px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              NAMAE MYOUJI
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box display={{ base: "block", sm: "none" }}>
        {/* <Box
          position={"fixed"}
          w="100vw"
          className="text"
          h="10vh"
          bg="gray.200"
          zIndex={"100"}
          opacity={"0.8"}
        >
          <Flex
            pt="4px"
            pb="4px"
            bg=""
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              letterSpacing="0.06rem"
              fontSize="18px"
              fontWeight="bold"
              mr="auto"
              ml="30px"
            >
              MORITA
            </Text>
            <Flex mr="30px">
              <Text mr="10px" fontSize={"10px"} fontWeight={"bold"}>
                ABOUT
              </Text>
              <Text fontWeight={"bold"} fontSize={"10px"}>
                WORKS
              </Text>
            </Flex>
          </Flex>
          <ScrollAnimation />
        </Box> */}
        <Box w="100vw" h="100vh" className="goldGradient">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="90px"
              w="90px"
              borderRadius="50%"
              className="pat"
              opacity={"0.8"}
              mb="20px"
            ></Box>
            <Text
              fontSize="30px"
              letterSpacing="0.08rem"
              fontWeight="bold"
              color="gray.800"
              className="text shadow"
            >
              NAMAE MYOUJI
            </Text>
          </Flex>
        </Box>
        <Box w="100vw" minH="60vh" className="text" pb="40px">
          <Box className="sa sa--up" pt="30px" pb="30px" pr="24px" pl="24px">
            <Text
              fontSize="30px"
              mb="20px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              私について
            </Text>
            <Box>
              <Text
                fontSize={"16px"}
                letterSpacing={"0.06rem"}
                lineHeight={"1.6em"}
                mb="40px"
              >
                これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
              </Text>
            </Box>
            <Image
              src="https://images.unsplash.com/photo-1680913526064-d49073fc58f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              width={"640px"}
            />
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="60vh"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
          pb="40px"
        >
          <Box className="sa sa--up" pt="30px" pb="30px" pr="24px" pl="24px">
            <Text
              fontSize="30px"
              mb="20px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              活動・経験
            </Text>
            <Box>
              <Text
                fontSize={"16px"}
                letterSpacing={"0.06rem"}
                lineHeight={"1.6em"}
                mb="40px"
              >
                これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
                これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。
              </Text>
            </Box>
            <Image
              src="https://images.unsplash.com/photo-1680868354675-34192a9baae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
              width={"640px"}
            />
          </Box>
        </Box>
        <Box h="90px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"16px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              Waya
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

