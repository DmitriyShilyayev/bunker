import React from 'react';
import Form from 'react-bootstrap/Form';

export class LeaderSwitcher extends React.Component {
    onChange = (e) => {
        this.props.setLeader(e.currentTarget.checked);
    };
    render() {
        return (
            <Form className="mb-3">
                <Form.Check
                    reverse
                    type="checkbox"
                    id="leader-switch"
                    label="I'm a Leader"
                    onChange={this.onChange}
                />
            </Form>
        );
    }
}

export default LeaderSwitcher;
