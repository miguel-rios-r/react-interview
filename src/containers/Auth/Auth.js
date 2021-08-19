import { connect } from 'react-redux';
import Login from '../../screens/home';
import { mapStateToProps } from './MapStateToProps';
import { mapDispatchToProps } from './MapDispatchToProps';

export default connect(mapStateToProps, mapDispatchToProps)(Login); 