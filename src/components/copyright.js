import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default class copyright extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                KingBoo
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Col>
                </Row>
            </div>
        )
    }
}