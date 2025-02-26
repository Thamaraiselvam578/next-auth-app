import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ maxHeight: "100vh", overflowY: "auto" }} className="scrollbar">
            <Navbar />
            <Container maxWidth={"lg"}>
                <Box>
                    {children}
                </Box>
            </Container>
        </Box>
    );
}