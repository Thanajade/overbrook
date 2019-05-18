import React from 'react';
import { Image, Menu, Divider, Container, Table, Segment, Header, Grid } from 'semantic-ui-react'

const ImageExampleFluid = () => <Image src='/img/home.jpg' fluid />;

const obh_logo_1 = '/img/logo-3-white.png';
const obh_logo_2 = '/img/logo.png';
const aav = '/img/01-sponsors/AAV-Logo.png';
const nok = '/img/01-sponsors/NOK-Logo.png';

const Layouts = () => {
    return (
        <div>
            <Menu>
                <Menu.Item header>
                        <img src='/img/logo.png' style={{height:36}} alt='logo'/>
                </Menu.Item>
                <Menu.Item
                    name='Overbrook Hospital Minimatathon'
                />
                <Menu.Item position='right'>
                    <a href='https://www.facebook.com/Overbrook-Hospital-Minimarathon-2055651531391761/'>ติดต่อ</a>
                </Menu.Item>
            </Menu>
            <Segment>
                {/*Cover*/}
                <ImageExampleFluid/>
            </Segment>
            <Segment>
                <Container textAlign='center'>
                    <Grid columns='equal'>
                        <Grid.Row column={4}>
                            <Grid.Column>
                                <Image src={obh_logo_1}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={nok}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={aav}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={obh_logo_2}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Segment>
                <Header as='h2'>กำหนดการณ์</Header>
                <Image src='/img/03-agenda/agenda.jpg' fluid/>
            </Segment>
            <Segment>
                <Header as='h2'>เส้นทางวิ่ง</Header>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3'>มินิมาราธอน</Header>
                            <Image src='/img/02-routes/route-mini.jpg' fluid/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3'>ฟันรัน</Header>
                            <Image src='/img/02-routes/route-funrun.jpg' fluid/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Header as='h2'>ประเภทการแข่งขัน</Header>
                <Image src='/img/04-racetype/racetype.jpg' fluid/>
            </Segment>
            <Segment>
                <Header as='h2'>เสื้อประจำงาน</Header>
                <Image src='/img/06-shirt/shirt.jpg' fluid/>
            </Segment>
            <Segment>
                <Header as='h2'>เหรียญรางวัล</Header>
                <Container textAlign='center'>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/img/05-medal/medal-front.png' size='medium'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='/img/05-medal/medal-back.png' size='medium'/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/img/05-medal/strap-mini.png' size='medium'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='/img/05-medal/strap-funrun.png' size='medium'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Segment>
                <Container textAlign='center'>
                    <Header as='h2'>
                        ขอขอบคุณทุกท่านที่ให้ความสนใจและสนับสนุนงานวิ่ง Overbrook Minimarathon ในครั้งนี้
                    </Header>
                    <Header as='h3'>
                        ติดตามข่าวสารอัพเดทของงานได้ทาง Facebook Page <a href="https://www.facebook.com/Overbrook-Hospital-Minimarathon-2055651531391761/">Overbrook Minimarathon</a>
                    </Header>
                    <Header as='h3'>
                        ทั้งนี้ท่านยังสามารถแจ้งชำระเงินและสมัครวิ่งได้ ณ วันงานเสาร์ที่ 27 เมษายน 2562
                        แล้วเจอกันในงานครับ
                    </Header>
                </Container>
            </Segment>
        </div>
    )
};

export default Layouts;