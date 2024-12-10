import { PanelFrame } from "@/components"
import { serverSide } from "@/helpers/serverside/boardContext"
import { boardContext } from "@/helpers/types/boardContext"
import {
  Add,
  AddAlarm,
  ArrowBack,
  Delete,
  Edit,
  MoreHoriz
} from "@mui/icons-material"
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import { MouseEvent, useState } from "react"

export const getServerSideProps: GetServerSideProps<
  boardContext
> = async context => {
  return serverSide(context)
}

const BoardContent: NextPage<boardContext> = ({ ...props }) => {
  const [alerMessage, setAlerMessage] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [boardContent, setBoardContent] = useState<boardContext>(props)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <PanelFrame
      alerMessage={alerMessage}
      showAlert={showAlert}
      title="Nome do quadro"
      locals={[
        {
          href: "/painel/inicio",
          iconName: "home",
          text: "Home"
        },
        {
          href: "/painel/tarefa",
          iconName: "dashboard",
          text: "Tarefas"
        },
        {
          href: "/painel/tarefa/board/sadasdasdad",
          iconName: "space_dashboard",
          text: "nome do quadro"
        }
      ]}
      closeAlert={() => {
        setShowAlert(false)
      }}
      outsideContent={
        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Button variant="contained" startIcon={<ArrowBack />}>
            voltar
          </Button>
        </Box>
      }
      dense
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              width: "100%",
              height: "60px",
              p: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "end",
              background: theme => theme.palette.primary.main
            }}
          >
            <Typography variant="body1" sx={{ marginRight: 1, color: "white" }}>
              integrantes:{" "}
            </Typography>

            {boardContent.participants.map((part, index) => (
              <Tooltip key={`participant-number-${index}`} title={part.nome}>
                <Avatar sx={{ width: 24, height: 24 }} />
              </Tooltip>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div id="TaskContainer">
            {props.columns.map((cloumn, cIndex) => (
              <div key={`column-id-${cloumn.id}-key-${cIndex}`} id="TaskColumn">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid
                      container
                      spacing={1}
                      sx={{ color: "white", fontSize: "10pt" }}
                    >
                      <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                        <Box sx={{ paddingLeft: 2, userSelect: "none" }}>
                          {cloumn.name}
                        </Box>
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={handleClick}
                          >
                            <MoreHoriz fontSize="small" />
                          </div>
                        </Box>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          sx={{
                            "& .MuiMenu-paper": {
                              backgroundColor: "#212121",
                              color: "white"
                            }
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Edit fontSize="small" sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText>Renomear lista</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Delete
                                fontSize="small"
                                sx={{ color: "white" }}
                              />
                            </ListItemIcon>
                            <ListItemText>Excluir lista</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Add fontSize="small" sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText>Adicionar cartão</ListItemText>
                          </MenuItem>
                          <Divider sx={{ my: 0.5 }} />
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <ArrowBack
                                fontSize="small"
                                sx={{ color: "white" }}
                              />
                            </ListItemIcon>
                            <ListItemText>Mover p/ Esquerda</ListItemText>
                          </MenuItem>
                        </Menu>
                      </Grid>
                    </Grid>
                  </Grid>

                  {cloumn.cards.map((cards, cardIndex) => (
                    <Grid
                      key={`column-id-${cloumn.id}-key-${cIndex}-card-id-${cards.id}-key-${cardIndex}`}
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "70px",
                          background: "#424242",
                          borderRadius: 1
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
                            fontSize: "14px",
                            fontWeight: "400",
                            width: "100%",
                            marginBottom: "4px",
                            padding: "6px"
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid
                              sx={{ userSelect: "none" }}
                              item
                              xs={10}
                              sm={10}
                              md={10}
                              lg={10}
                              xl={10}
                            >
                              {cards.name}
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                              <div style={{ cursor: "pointer" }}>
                                <MoreHoriz fontSize="small" />
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              xl={12}
                            ></Grid>
                          </Grid>
                        </div>
                      </Box>
                    </Grid>
                  ))}

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button
                      sx={{ color: "white" }}
                      variant="text"
                      fullWidth
                      startIcon={<Add />}
                    >
                      Adicionar Cartão
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ))}

            <div id="TaskColumnAdd">
              <Button
                sx={{ color: "white" }}
                variant="text"
                fullWidth
                startIcon={<Add />}
              >
                Adicionar Lista
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </PanelFrame>
  )
}

export default BoardContent
