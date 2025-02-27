// import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

export const ServiceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-8 border-dashed border-2 border-blue-300 rounded-lg">
      {/* Highspeed Internet */}
      <Card className="shadow-lg rounded-xl">
        <CardContent>
          <Box className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white p-2 rounded-full">📶</span>
            <Typography variant="h6" fontWeight="bold">
              Highspeed Internet
            </Typography>
          </Box>
          <Typography className="text-gray-600 mt-2">
            Experience lightning-fast, reliable internet tailored just for you. Whether you’re streaming,
            working, or gaming, our high-speed internet keeps you seamlessly connected to the world.
          </Typography>
          <img src="/speed-chart.png" alt="Speed Chart" className="mt-4 rounded-lg" />
        </CardContent>
      </Card>

      {/* Complete Anonymity */}
      <Card className="shadow-lg rounded-xl">
        <CardContent>
          <Box className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white p-2 rounded-full">🛡</span>
            <Typography variant="h6" fontWeight="bold">
              Complete Anonymity
            </Typography>
          </Box>
          <Typography className="text-gray-600 mt-2">
            Ensure encrypted, high-performance remote access for your workforce, safeguarding critical data
            and maintaining seamless connectivity across global locations.
          </Typography>
          <img src="/latency-chart.png" alt="Latency Chart" className="mt-4 rounded-lg" />
        </CardContent>
      </Card>

      {/* Crystal-Clear Internet Calls */}
      <Card className="col-span-2 shadow-lg rounded-xl">
        <CardContent>
          <Box className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white p-2 rounded-full">📞</span>
            <Typography variant="h6" fontWeight="bold">
              Crystal-Clear Internet Calls
            </Typography>
          </Box>
          <Typography className="text-gray-600 mt-2">
            Revolutionize your communication with our crystal-clear VoIP solutions. Say goodbye to traditional
            phone lines and enjoy cost-effective, feature-rich calls that enhance your personal or business communication.
          </Typography>
          <img src="/voip-map.png" alt="VoIP Map" className="mt-4 rounded-lg" />
        </CardContent>
      </Card>

      {/* Are you Off-Grid? Stay Connected */}
      <Card className="shadow-lg rounded-xl">
        <CardContent>
          <Box className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white p-2 rounded-full">🌍</span>
            <Typography variant="h6" fontWeight="bold">
              Are you Off-Grid? Stay Connected
            </Typography>
          </Box>
          <Button href="#" className="text-blue-600 mt-2" variant="text">
            Discover more →
          </Button>
        </CardContent>
      </Card>

      {/* Store & Handle Data with Ease */}
      <Card className="shadow-lg rounded-xl">
        <CardContent>
          <Box className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white p-2 rounded-full">💾</span>
            <Typography variant="h6" fontWeight="bold">
              Store & Handle Data with Ease
            </Typography>
          </Box>
          <Typography className="text-gray-600 mt-2">
            Cloud-based servers with zero downtime.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};