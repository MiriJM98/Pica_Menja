<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rutes</title>
    <style>
        html,
        body {
	        height: 100%;
        }

        body {
	        margin: 0;
	        background: linear-gradient(45deg, #49a09d, #5f2c82);
	        font-family: Arial, Helvetica, sans-serif;
	        font-weight: 100;
            font-size: 14pt;
        }

        .container {
	        position: absolute;
	        top: 50%;
	        left: 50%;
	        transform: translate(-50%, -50%);
        }

        table {
	        width: 800px;
	        border-collapse: collapse;
	        overflow: hidden;
	        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        th,
        td {
	        padding: 15px;
	        background-color: rgba(255,255,255,0.2);
	        color: #fff;
        }   

        th {
	        text-align: left;
        }

        thead {
	        th {
		    background-color: #55608f;
	    }
    }

    tbody {
	    tr {
		    &:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			    }
		    }
	    }
    }
    </style>
</head>
<body>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>TAULA</th>
                    <th>MÈTODE HTTP</th>
                    <th>URI</th>
                    <th>DESCRIPCIÓ</th>
                    <th>PARÀMETRES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>