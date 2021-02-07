import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/home'
import Users from '../pages/users'
import Posts from '../pages/posts'
import Post from '../pages/posts/post'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}))

export default function AppLayout() {
  const classes = useStyles()

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <Button color="inherit" component={Link} to="/" exact="true">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>
          <Button color="inherit" component={Link} to="/posts">
            Posts
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}