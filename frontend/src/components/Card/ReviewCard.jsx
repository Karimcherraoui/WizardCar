import { Button, Card, CardBody, Flex, Text, Textarea } from "@chakra-ui/react";
import { Input } from "reactstrap";

export const ReviewCard = () =>
  // { review }
  {
    return (
      <Flex gap={50} flexDirection={"column"} width={"100%"} marginBottom={20}>
        <Text
          fontSize="50px"
          fontWeight="bold"
          color="gray.800"
          textAlign={"center"}
          marginTop={4}
        >
          Reviews
        </Text>
        <Flex gap={40}>
          <Flex
            textAlign="center"
            flexDirection={"column"}
            width={"100%"}
            gap={4}
          >
            <Input
              //  key={reviewForm.email}
              mt={8}
              placeholder="Email"
              size="lg"
              rounded="lg"
              width={"100%"}
              name="email"
              // onChange={(e) =>
              //   setReviewForm({ ...reviewForm, email: e.target.value })
              // }
            />
            <Input
              // key={reviewForm.fullName}
              mt={8}
              placeholder="Full Name"
              size="lg"
              rounded="lg"
              width={"100%"}
              name="name"
              // onChange={(e) =>
              //   setReviewForm({ ...reviewForm, fullName: e.target.value })
              // }
            />
            <Textarea
              // key={reviewForm.comment}
              name="comment"
              mt={8}
              placeholder="Write a review"
              size="lg"
              rounded="lg"
              resize="none"
              width={"100%"}
              border={"2px solid lightblue"}
              // onChange={(e) =>
              //   setReviewForm({ ...reviewForm, comment: e.target.value })
              // }
            />
            <Button
              mt={4}
              colorScheme="green"
              size="lg"
              rounded="lg"
              px={8}
              py={6}
              // onClick={handleSubmit}
            >
              Submit
            </Button>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={4}
            width={"80%"}
            overflowY="auto"
            maxHeight="400px"
            padding={10}
          >
            <Card
              width={"100%"}
              // maxH={"200px"}
              height={"fit-content"}
              bg={"#f3f6f4"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <CardBody>
                <Text fontWeight="bold">test name</Text>
                <Text textColor={"gray"} marginBottom={6}>
                  test@email.com
                </Text>
                <Text>test test test tet ste tst eteshvdhsjdb jsbdjsbds</Text>
              </CardBody>
            </Card>

            <Card
              width={"100%"}
              height={"fit-content"}
              bg={"#f3f6f4"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <CardBody>
                <Text fontWeight="bold">test name</Text>
                <Text textColor={"gray"} marginBottom={6}>
                  test@email.com
                </Text>
                <Text>test test test tet ste tst eteshvdhsjdb jsbdjsbds</Text>
              </CardBody>
            </Card>

            <Card
              width={"100%"}
              height={"fit-content"}
              bg={"#f3f6f4"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <CardBody>
                <Text fontWeight="bold">test name</Text>
                <Text textColor={"gray"} marginBottom={6}>
                  test@email.com
                </Text>
                <Text>test test test tet ste tst eteshvdhsjdb jsbdjsbds</Text>
              </CardBody>
            </Card>

            <Card
              width={"100%"}
              height={"fit-content"}
              bg={"#f3f6f4"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <CardBody>
                <Text fontWeight="bold">test name</Text>
                <Text textColor={"gray"} marginBottom={6}>
                  test@email.com
                </Text>
                <Text>test test test tet ste tst eteshvdhsjdb jsbdjsbds</Text>
              </CardBody>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    );
  };
