import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-tabify';


import {
    Accordion,
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col,
    Nav,
    UncontrolledTabs
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TasksMedia
} from "../../components/ProjectsDashboards/TasksMedia";
import {
    TinyDonutChart
} from "../../components/ProjectsDashboards/TinyDonutChart"
import {
    TinyDonutChartAllProjects
} from "../../components/ProjectsDashboards/TinyDonutChartAllProjects"
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini"
import { DraggableProjects } from './DraggableProjects';
import {CardText, NavItem, NavLink} from "../../../components";
import {UncontrolledTabsNavLink} from "../../../components/UncontrolledTabs/UncontrolledTabsNavLink";
import TabsPills from "../../Interface/TabsPills";
import {UncontrolledTabsTabContent} from "../../../components/UncontrolledTabs/UncontrolledTabsTabContent";

const ProjectsDashboard = () => (
    <Container>
        {/*Header*/}
        <Row className="mb-5">

            <Col lg={ 12 }>
                <HeaderMain 
                    title="Home"
                    className="mb-4 mb-lg-5"
                />

            </Col>
        </Row>
        {/*Orders, Suppliers, Parts Overview*/}
        <Row>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Orders
                        </CardTitle>

                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Suppliers
                        </CardTitle>

                    </CardBody>
                </Card>
            </Col   >
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Parts
                        </CardTitle>

                    </CardBody>
                </Card>
            </Col   >
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>

            {/*Tasks*/}
            <Col lg={ 6 }>

                <Tabs>
                    <Tab label="Tasks For You">
                        <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-3">
                                Tasks
                            </CardTitle>
                            <InputGroup>
                                <Input placeholder="Search Tasks..." />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary" outline tag={ Link } to="/apps/tasks/list">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </CardBody>
                        <ListGroup flush>
                            <ListGroupItem action>
                                <TasksMedia
                                    iconColor="success"
                                />
                            </ListGroupItem>
                            <ListGroupItem action>
                                <TasksMedia
                                    iconColor="danger"
                                    id="2"
                                />
                            </ListGroupItem>
                            <ListGroupItem action>
                                <TasksMedia
                                    iconColor="warning"
                                    id="3"
                                />
                            </ListGroupItem>
                            <ListGroupItem action>
                                <TasksMedia
                                    id="4"
                                />
                            </ListGroupItem>
                            <ListGroupItem action tag={ Link } to="/apps/tasks/list" className="text-center">
                                View All Tasks
                                <i className="fa fa-angle-right ml-2"></i>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    </Tab>

                    <Tab label="Tasks Created By You">
                        <Card className="mb-3">
                            <CardBody>
                                <CardTitle tag="h6" className="mb-3">
                                    Tasks
                                </CardTitle>
                                <InputGroup>
                                    <Input placeholder="Search Tasks..." />
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary" outline tag={ Link } to="/apps/tasks/list">
                                            <i className="fa fa-search"></i>
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                            <ListGroup flush>
                                <ListGroupItem action>
                                    <TasksMedia
                                        iconColor="success"
                                    />
                                </ListGroupItem>
                                <ListGroupItem action>
                                    <TasksMedia
                                        iconColor="danger"
                                        id="2"
                                    />
                                </ListGroupItem>
                                <ListGroupItem action>
                                    <TasksMedia
                                        iconColor="warning"
                                        id="3"
                                    />
                                </ListGroupItem>
                                <ListGroupItem action>
                                    <TasksMedia
                                        id="4"
                                    />
                                </ListGroupItem>
                                <ListGroupItem action tag={ Link } to="/apps/tasks/list" className="text-center">
                                    View All Tasks
                                    <i className="fa fa-angle-right ml-2"></i>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Tab>

                </Tabs>






            </Col>
            {/*Upcoming Suppliers, Orders, Parts*/}


            <Col lg={6}>

                <br></br>
                <br></br>

                <Accordion className="mb-2" initialOpen="True">
                    <Accordion.Header className="h6">
                        <Accordion.Indicator className="mr-2"/>
                        Upcoming Orders
                    </Accordion.Header>
                    <Accordion.Body>
                        <CardText>
                            { faker.lorem.paragraph() }
                        </CardText>
                    </Accordion.Body>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Header className="h6">
                        <Accordion.Indicator className="mr-2"/>
                        Suppliers with upcoming orders
                    </Accordion.Header>
                    <Accordion.Body>
                        <CardText>
                            { faker.lorem.paragraph() }
                        </CardText>
                    </Accordion.Body>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Header className="h6">
                        <Accordion.Indicator className="mr-2"/>
                        Parts with upcoming orders
                    </Accordion.Header>
                    <Accordion.Body>
                        <CardText>
                            { faker.lorem.paragraph() }
                        </CardText>
                    </Accordion.Body>
                </Accordion>
            </Col>


        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Home'
})(ProjectsDashboard);