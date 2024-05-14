import React from 'react';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { LinkedIn } from '../linked-in';

export const App = () => {
  return (
    <Flex className="main" flexDir="column">
      <Tabs>
        <TabList>
          <Tab>LinkedIn</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <LinkedIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
