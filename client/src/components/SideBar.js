import React, { Fragment } from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function SideBar() {
    return (
      <div className="side_bar">
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Overview',
                itemId: '/overview',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Calendar',
                itemId: '/calendar',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Lists',
                itemId: '/lists',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Main Tasks',
                    itemId: '/lists/maintasks',
                  },
                  {
                    title: 'GER1000',
                    itemId: '/lists/ger1000',
                  },
                ],
              }
            ]}
          />
      </div>
    );
}

export default SideBar;
