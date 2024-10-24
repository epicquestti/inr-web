import {
  Avatar,
  Backdrop,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Toolbar,
  Typography
} from "@mui/material"
import { FC, ReactNode, useEffect, useState } from "react"
import ApplicationBar from "./ApplicationBar"
import { AccountCircle, Close, Menu } from "@mui/icons-material"
import LoadingBox from "../loadingBox"
import { useGlobalCtx } from "@/context/Global"
import { useRouter } from "next/router"
import ApplicationDrawer from "../ApplicationDrawer"
import UserDrawer from "../UserDrawer"
import Location from "../Location"
export type local = {
  text: string
  href: string
  iconName: string
}

export const PanelFrame: FC<{
  children?: ReactNode
  loading?: boolean
  locals?: local[]
  outsideContent?: ReactNode
  title?: string
  showMandatoryMessage?: boolean
  showAlert?: boolean
  closeAlert?: () => void
  alerMessage?: string
}> = ({ ...props }) => {
  const [leftDrawer, setLeftDrawer] = useState<boolean>(false)
  const [rigthDrawer, setRigthDrawer] = useState<boolean>(false)
  // const router = useRouter()
  // const globalContext = useGlobalCtx()
  useEffect(() => {
    const lm = localStorage.getItem("leftDrawerState")
    const rm = localStorage.getItem("rigthMenuState")
    if (lm) setLeftDrawer(JSON.parse(lm))
    if (rm) setRigthDrawer(JSON.parse(rm))
  }, [])
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar position="absolute" open={leftDrawer}>
        <Toolbar
          sx={{
            pr: "24px"
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setLeftDrawer(leftDrawer => {
                  localStorage.setItem("leftDrawerState", `${!leftDrawer}`)
                  return !leftDrawer
                })
              }}
            >
              <Menu />
            </IconButton>
          </Box>

          {/* <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setRigthDrawer(rtOpen => !rtOpen)
              }}
            >
              <Icon>notifications</Icon>
              <Icon>notifications_active</Icon>
              <Icon>notifications_paused</Icon>
            </IconButton>
          </Box> */}

          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setRigthDrawer(rigthDrawer => {
                  localStorage.setItem("rigthMenuState", `${!rigthDrawer}`)
                  return !rigthDrawer
                })
              }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </ApplicationBar>

      <ApplicationDrawer
        PaperProps={{
          sx: {
            background: theme => theme.palette.primary.light
          }
        }}
        variant="permanent"
        open={leftDrawer}
      >
        <Toolbar
          sx={{
            display: "inline-block",
            px: [1]
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography variant="button">menu da aplicação</Typography>
          </Box>

          <Divider />

          {props.loading ? (
            <LoadingBox />
          ) : (
            <List
              sx={{
                width: "100%",
                maxWidth: 360
              }}
              component="nav"
            >
              {/* {globalContext.usuario.authorized
                ? globalContext.usuario.ambiente.aplication.map(
                    (item: any, index: any) => (
                      <ListItemButton
                        key={`menu-left-${index}-item`}
                        onClick={() => {
                          router.push(item.path)
                        }}
                      >
                        <ListItemIcon>
                          <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    )
                  )
                : ""} */}
            </List>
          )}
        </Toolbar>
      </ApplicationDrawer>

      <UserDrawer
        PaperProps={{
          sx: {
            background: theme => theme.palette.primary.light
          }
        }}
        variant="permanent"
        open={rigthDrawer}
        anchor="right"
      >
        <Toolbar
          sx={{
            display: "block",
            width: "100%",
            px: [1]
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left"
            }}
          ></Box>

          {props.loading ? (
            <LoadingBox />
          ) : (
            <List>
              <ListItem>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {/* {globalContext.usuario.authorized ? (
                    <Avatar
                      sx={{ width: 102, height: 102 }}
                      src={globalContext.usuario.foto}
                    />
                  ) : (
                    <Avatar sx={{ width: 102, height: 102 }} />
                  )} */}
                </Box>
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {/* <i>{globalContext.usuario.nome}</i> */}
                </Box>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography variant="caption">MENU DO USUÁRIO</Typography>
              </ListItem>

              {/* {globalContext.usuario.authorized
                ? globalContext.usuario.ambiente.usuario.map(
                    (item: any, index: any) => (
                      <ListItemButton
                        key={`menu-left-${index}-item`}
                        onClick={() => {
                          router.push(item.path)
                        }}
                      >
                        <ListItemIcon>
                          <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    )
                  )
                : ""} */}

              <Divider />

              <ListItemButton
                onClick={() => {
                  // globalContext.usuario.logout()
                }}
              >
                <ListItemIcon>
                  <Icon>close</Icon>
                </ListItemIcon>
                <ListItemText primary="Logoff" />
              </ListItemButton>
            </List>
          )}
        </Toolbar>
      </UserDrawer>

      <Box
        component="main"
        sx={{
          backgroundColor: theme => theme.palette.secondary.main,
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Location location={props.locals} />
            </Grid>

            {props.title && (
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Typography
                  variant="h4"
                  sx={{ color: theme => theme.palette.primary.light }}
                >
                  <strong>{props.title}</strong>
                </Typography>
              </Grid>
            )}

            {props.outsideContent && (
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                {props.outsideContent}
              </Grid>
            )}

            {props.showMandatoryMessage && (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="caption"
                  sx={{ color: theme => theme.palette.primary.light }}
                >
                  Os campos marcados com * são de preenchimento obrigatório.
                </Typography>
              </Grid>
            )}

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {props.children}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={props.showAlert}
        autoHideDuration={6000}
        onClose={() => {
          props.closeAlert && props.closeAlert()
        }}
        message={props.alerMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              props.closeAlert && props.closeAlert()
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />

      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={props.loading || false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}
