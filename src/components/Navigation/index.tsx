import React, { ComponentType } from 'react';
import { matchPath } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';

import { useRouter } from 'providers/routerProvider';
import NavigationListItem from './NavigationListItem';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const NavigationList = ({ pages, ...rest }: any) => (
  <List>
    {pages.reduce(
      (items: any, page: any) => reduceChildRoutes({ items, page, ...rest }),
      [],
    )}
  </List>
);

const reduceChildRoutes = ({ router, items, page, depth }: any) => {
  if (page.children) {
    const open = matchPath(router.location.pathname, {
      path: page.href,
      exact: false,
    });

    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}>
        <NavigationList
          depth={depth + 1}
          pages={page.children}
          router={router}
        />
      </NavigationListItem>,
    );
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />,
    );
  }

  return items;
};

interface ItemProps {
  title: string;
  href: string;
}

interface SelectionProps {
  title: string;
  pages: Array<{
    title: string;
    href: string;
    icon: ComponentType;
    children?: ItemProps[];
  }>;
}

const Navigation = ({ title, pages }: SelectionProps) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Typography variant="overline">{title}</Typography>
      <NavigationList depth={0} pages={pages} router={router} />
    </div>
  );
};

export default Navigation;
