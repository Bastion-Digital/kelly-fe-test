const Container = ({ children, cols = '1' }) => {
	return <div className={`container container--${cols}`}>{children}</div>;
};

export default Container;
