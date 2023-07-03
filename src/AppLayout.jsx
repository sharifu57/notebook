import { NavLink, Outlet } from "react-router-dom";

import { Flex, HStack, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const AppLink = ({ to, children }) => {
  return (
    <li style={{ padding: "1rem 0.5rem", fontSize: "1rem" }}>
      <NavLink
        to={to}
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          };
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default function AppLayout() {
  const [collapse, setCollapse] = useState(true);

  return (
    <HStack w="full" h="100vh" bg="gray.100">
      {/* sidebar */}
      <Flex
        as="aside"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        // borderRadius="3xl"
        maxW={collapse ? 250 : 100}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1",
            padding: 0,
          }}
        >
          <AppLink to="/home">Dashboard</AppLink>
          <AppLink to="/about">About us</AppLink>
          <AppLink to="/notes">Notes</AppLink>
          <AppLink to="/faq">FAQs</AppLink>
        </ul>

        {/* <Sidebar collapse={collapse}/>  */}
      </Flex>

      <Flex
        as="main"
        w="full"
        h="full"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        // borderRadius="3xl"
      >
        <Heading>
          <p>Heading</p>
        </Heading>
        <IconButton
          aria-label="Menu Collapse"
          icon={<HamburgerIcon />}
          backgroundColor="red"
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </Flex>
    </HStack>
  );
  // return (
  // 	<div
  // 		style={{
  // 			display: "flex",
  // 			width: "100vw",
  // 			height: "100vh",
  // 			background: "#f5f5f5",
  // 		}}
  // 	>
  // 		<aside
  // 			style={{
  // 				background: "white",
  // 				width: "300px",
  // 				borderRight: "1px solid #3333",
  // 				padding: "2rem",
  // 				fontSize: "1.5rem",
  // 				fontWeight: "bold",
  // 			}}
  // 		>
  // 			<ul
  // 				style={{
  // 					listStyle: "none",
  // 					display: "flex",
  // 					flexDirection: "column",
  // 					gap: "1",
  // 					padding: 0,
  // 				}}
  // 			>
  // 				<AppLink to="/home">Dashboard</AppLink>
  // 				<AppLink to="/about">About us</AppLink>
  // 				<AppLink to="/notes">Notes</AppLink>
  // 				<AppLink to="/faq">FAQs</AppLink>
  // 			</ul>
  // 		</aside>
  // 		<div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
  // 			<header
  // 				style={{
  // 					display: "flex",
  // 					alignItems: "center",
  // 					background: "white",
  // 					height: "64px",
  // 					borderBottom: "1px solid #ddd",
  // 					padding: "0 1.5rem",
  // 					fontSize: "1.5rem",
  // 					fontWeight: "bold",
  // 				}}
  // 			>
  //         <IconButton
  //           variant='outline'
  //           colorScheme='teal'
  //           aria-label='Call Sage'
  //           fontSize='20px'
  //           icon={<MdPhone />}
  //         />
  // 				My App
  // 			</header>
  // 			<main style={{ flex: 1 }}>
  // 				<Outlet />
  // 			</main>
  // 			<footer style={{ textAlign: "center", padding: "1rem" }}>
  // 				My app name Copyright &copy; {new Date().getFullYear()}
  // 			</footer>
  // 		</div>
  // 	</div>
  // );
}
