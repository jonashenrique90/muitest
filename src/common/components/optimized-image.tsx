/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from "react";
import LazyLoad from "react-lazyload";

export interface OptimizedImageProps {
	/** Image's source path */
	src: any;
	/** Image's webp source path */
	srcWebp?: any;
	/** Alternative description for the image */
	alt?: string;
	/** Image tag title */
	title?: string;
	/** Image extension */
	ext?: string;
	/** Image width */
	width?: string;
	/** Image height */
	height?: string;
	/** Image max-height */
	maxHeight?: string;
	/** Include the raw file directly (useful for SVG icons) */
	include?: boolean;
	/** Generate a low quality image placeholder */
	lqip?: boolean;
	/** Use traced outlines as loading placeholder */
	trace?: boolean;
	/** Resize an image */
	resize?: boolean;
	/** Is an amp page */
	amp?: boolean;
	/** Amp Image's layout */
	ampLayout?: "responsive" | "fixed";
	/** Custom classNames to put on the outermost tag */
	className?: string;
	zoomOnHover?: boolean;
	lazy?: boolean;
	lazyHeight?: number | string;
	lazyOnce?: boolean;
	lazyOffset?: number;
	stylesImg?: CSSProperties;
	stylesSvg?: CSSProperties;
}

export const OptimizedImage: FC<OptimizedImageProps> = ({
	src,
	srcWebp,
	alt,
	title,
	ext,
	width,
	height,
	maxHeight,
	amp,
	className,
	zoomOnHover,
	lazy,
	lazyHeight,
	lazyOnce,
	lazyOffset,
	stylesImg,
	stylesSvg,
	...props
}) => {
	if (ext == null) {
		if (typeof src === "string" && src.includes(".")) {
			// eslint-disable-next-line no-param-reassign
			ext = src.split(".").pop()!;
		} else if (
			src != null &&
			typeof src === "object" &&
			src.hasOwnProperty("src") &&
			src.src.includes(".")
		) {
			// eslint-disable-next-line no-param-reassign
			ext = src.src.split(".").pop()!;
		} else {
			// throw new Error('Extension was not provided and not identified in the image source');
			return null;
		}
	}

	if (ext === "svg") {
		if (props.include) {
			const inner = { __html: src };
			// eslint-disable-next-line react/no-danger
			return (
				<span
					dangerouslySetInnerHTML={inner}
					style={{ display: "block", ...stylesSvg }}
				/>
			);
		}
		if (props.trace) {
			const traceStyle = { backgroundImage: src.trace };
			return (
				<img
					src={src.src}
					style={traceStyle}
					width={width}
					height={height}
					alt={alt}
					title={title}
					className={className}
				/>
			);
		}
	}

	const imgStyle = { width, height, maxHeight };
	const imgComponent = (
		<picture
			className={
				zoomOnHover ? `${className ?? ""} optimized-image-zoom` : className
			}
			style={imgStyle}
		>
			{srcWebp != null && (
				<source
					srcSet={props.resize ? srcWebp.srcSet : srcWebp}
					type="image/webp"
				/>
			)}
			<source
				srcSet={props.resize ? src.srcSet : src}
				type={`image/${ext ?? "jpeg"}`}
			/>
			<img
				style={{ ...stylesImg }}
				src={props.resize ? src.src : src}
				srcSet={props.resize ? src.srcSet : null}
				width={width}
				height={height}
				alt={alt || ""}
				title={title || ""}
			/>
		</picture>
	);
	return lazy === true ? (
		<LazyLoad
			// eslint-disable-next-line react/forbid-component-props
			style={{ height, maxHeight }}
			height={lazyHeight || height}
			resize={props.resize}
			once={lazyOnce}
			offset={lazyOffset}
		>
			{imgComponent}
		</LazyLoad>
	) : (
		imgComponent
	);
};
