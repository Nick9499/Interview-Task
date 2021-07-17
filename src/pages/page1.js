import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const Page1 = () => {
	const history = useHistory()

	const [user, setUser] = useState([])

	const url = "https://rickandmortyapi.com/api/character"

	const buttonClickHandler = () => {
		history.push("pie")
	}

	useEffect(() => {
		let source = axios.CancelToken.source()

		const loadData = async () => {
			try {
				const response = await axios.get(url, { cancelToken: source.token })
				setUser(response.data.results)
			} catch (error) {
				if (axios.isCancel(error)) {
				} else {
					throw error
				}
			}
		}
		setTimeout(() => {
			loadData()
		}, 6000)

		return () => {
			source.cancel()
		}
	}, [])

	return (
		<div className='m-5'>
			<div className=' d-flex justify-content-around'>
				<h2>Users</h2>
				<button
					className='btn btn-outline-primary'
					onClick={buttonClickHandler}
				>
					Go to Pie Chart
				</button>
			</div>
			<div className='table-responsive mt-5'>
				<table className='table table-sm  table-borderless table-hover'>
					<thead className='thead-dark'>
						<tr className=''>
							<th scope='col'>Id</th>
							<th scope='col'>Name</th>
							<th scope='col'>No of Episodes</th>
							<th scope='col'>Status</th>
						</tr>
					</thead>
					{user.map((u) => (
						<tbody key={u.id}>
							<tr>
								<th xcope='row'>{u.id}</th>
								<td>{u.name}</td>
								<td>{u.episode.length}</td>
								<td>{u.status}</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
	)
}

export default Page1
