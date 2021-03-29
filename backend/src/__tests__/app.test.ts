import request from 'supertest';

import { app } from '../app';
import { companies } from '../data/companies';

describe('Tests the application routes', () => {
    it('should return a company by id', () => {
        return request(app)
            .get('/company/01F1CPNKBSZB15BHHB7DN9X601')
            .expect(200)
            .expect(companies[0]);
    });

    it('should return companies by filters', () => {
        return request(app)
            .post('/')
            .set('Content-Type', 'application/json')
            .send({
                searchTerm: 'construct',
                specialities: ['Excavation', 'Plumbing']
            })
            .expect(200)
            .expect(res => expect(res.body).toHaveLength(6));
    });

    it('should return all the companies', () => {
        return request(app)
            .post('/')
            .set('Content-Type', 'application/json')
            .send({
                searchTerm: '',
                specialities: []
            })
            .expect(200)
            .expect(res => expect(res.body).toHaveLength(10));
    });
});
