import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <SideBar />
                <Box sx={{ flexGrow: 1, maxHeight: "100vh", overflowY: "auto" }} className="scrollbar">
                    <Navbar />
                    <Container maxWidth={"xl"}>
                        <Box>
                            {children}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}