import * as React from 'react'
import SearchCharacter from './Search'
import { Link } from 'react-router-dom'

import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { VisibilityRounded } from '@mui/icons-material'

export default function SearchAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					{/* <IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton> */}
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							overflow: 'visible',
							display: { xs: 'none', sm: 'block' },
						}}
					>
						<Link to='/' className='home-link'>
							Marvel Characters
						</Link>
					</Typography>
					<div className='search-header'>
						<SearchCharacter />
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
